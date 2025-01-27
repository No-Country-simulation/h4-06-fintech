import envs from "config/envs";
import { handleRequest } from "shared/handleRequest";
import { Onboarding } from "./interface/onboarding";
import { AuthError, InternalError } from "shared/errors";
import { cookies } from "next/headers";

const BASE_URL = envs.BACKEND_URL;

export const onboardingApi = {
    async createOnboarding(params: Onboarding, userId: string) {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get('access_token');
        console.log("accessToken", accessToken);

        if (!accessToken) {
            throw new AuthError('Vuelve a iniciar sesion para realizar esta accion');
        }

        const url = BASE_URL + `/users/${userId}`;

        const options: RequestInit = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken.value}`,
            },
            body: JSON.stringify(params),
        };
        console.log("options", options);

        return handleRequest({
            url,
            options,
            ErrorClass: InternalError,
        });
    }

}
