export interface ReduxJornadasSlides {
    slide: PropsJornadasSlides
}

export interface PropsActiveSection {
    activeSection: string;
}

export interface ReduxJornadasSlidesSelector {
    trayectoria: ReduxJornadasSlides
    section: PropsActiveSection
}

export interface PropsJornadasSlides {
    year: string;
    title: string;
    host: string;
    location: string;
    date: string;
    modules: string[];
    workshops: string[];
    image: string;
    index: number;
}