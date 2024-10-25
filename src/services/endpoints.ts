import { AxiosResponse } from 'axios';
import jornadasApi from '../api/jornadasApi';
import { PropsFormData } from '../interfaces/IContactForm';
import { RegistFormInterface } from '../interfaces/IRegistForm';
import { PropsGetAssistantsFilters, PropsGetCountAssistantsFilters } from '../interfaces/IAdmin';

export const getAssitants = async ({ ...params }: PropsGetAssistantsFilters) => {
    try {
        const res: AxiosResponse = await jornadasApi.get(`/api/assistants/total`, { params });
        return res.data;
    } catch (err: unknown) {
        return { error: err };
    }
}

export const getAssitantsAutocomplete = async (filter: string) => {
    try {
        const res: AxiosResponse = await jornadasApi.get(`/api/assistants/filter`, { params: { filter: filter } });
        return res.data;
    } catch (err: unknown) {
        return { error: err };
    }
}

export const getTotalAssitants = async ({ ...params }: PropsGetCountAssistantsFilters) => {
    try {
        const res: AxiosResponse = await jornadasApi.get(`/api/assistants/total/count`, { params });
        return res.data;
    } catch (err: unknown) {
        return { error: err };
    }
}

export const postContactMail = async ({ ...params }: PropsFormData) => {
    try {
        const res: AxiosResponse = await jornadasApi.post(`/api/contact/mail`,
            {
                nombre: (params.nombre).toUpperCase(),
                telefono: params.telefono,
                correo: params.correo,
                asunto: (params.asunto).toUpperCase(),
                descripcion: params.descripcion
            }
        );
        return res.data;
    } catch (err: unknown) {
        return { error: err };
    }
}

export const postRegistMail = async ({ ...params }: RegistFormInterface) => {
    try {
        const res: AxiosResponse = await jornadasApi.post(`/api/register/mail`, { ...params });
        return res.data;
    } catch (err: unknown) {
        return { error: err };
    }
}

export const putRegistAssistance = async (data: string) => {
    try {
        const res: AxiosResponse = await jornadasApi.put(`/api/assistants/attendance`, { assistant: data });
        return res.data;
    } catch (err: unknown) {
        return { error: err };
    }
}

