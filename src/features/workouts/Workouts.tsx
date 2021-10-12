import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetUserWorkoutsQuery } from "../../services/peloton";

export const Workouts = () => {
    const userId = useSelector((state: RootState) => state.auth.userId);
    const { data, error, isLoading } = useGetUserWorkoutsQuery(userId!);

    if (error) {
        return (
            <>
                <div>{JSON.stringify(error)}</div>
            </>
        );
    }

    if (isLoading) {
        return  (<>
        <div>Loading workouts...'</div>
        </>)
    }
    return (
        <>
            <div>{JSON.stringify(data)}</div>
        </>
    );
}