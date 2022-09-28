import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/dataActions";

const useProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state?.commonData?.profile);

    useEffect(() => {
        if (profile === undefined) {
            dispatch(fetchProfile());
        }
    }, [dispatch]);

    return profile;
};

export default useProfile;
