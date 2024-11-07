import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

import { PassageUser } from '@passageidentity/passage-elements/passage-user';

export function useAuth() {
    const authStore = useAuthStore();

    const getUserInfo = async () => {
        try {
            const authToken = localStorage.getItem('psg_auth_token');

            const passageUser = new PassageUser(authToken);
            const user = await passageUser.userInfo(authToken);

            (user) ? await authStore.setToken(authToken)
                : authStore.unsetToken();
            console.log(user)
        } catch (error) {
            authStore.unsetToken();
        }
    };

    onMounted(() => getUserInfo());

    return { getUserInfo };
}