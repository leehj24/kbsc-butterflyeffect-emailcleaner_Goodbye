import { useMutation } from "@tanstack/react-query";
import { register } from '../api/auth';

import { useNavigation } from "@react-navigation/core";
import { useUserState } from "../contexts/UserContext";
import { RootStackNavigationProp } from "../stacks/types";

export default function useRegister() {
    const [, setUser] = useUserState();
    const navigation = useNavigation<RootStackNavigationProp>();

    const mutation = useMutation(register, {
        onSuccess: (data) => {
            setUser(data.user);
            navigation.pop();
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    });
    return mutation;
}