export interface ReduxModalSelector {
    modal: PropsGlobalModal;
}

export interface PropsGlobalModal {
    props: PropsGlobalModalInterface;
}

export interface PropsGlobalModalInterface {
    open: boolean;
    name: string;
    args: any;
    width?: string;
}

export interface PropsDatModal {
    name: string;
    img: string;
    responsiveWidth: string;
    width: string;
}