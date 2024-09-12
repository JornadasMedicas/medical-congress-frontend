export interface ReduxJornadasSlides {
    slide: PropsJornadasSlides
}

export interface ReduxJornadasSlidesSelector {
    trayectoria: ReduxJornadasSlides
}

export interface PropsJornadasSlides {
    year: string;
    title: string;
    host: string;
    location: string;
    date: string;
    modules: string[];
    workshops: string[];
    index: number;
}