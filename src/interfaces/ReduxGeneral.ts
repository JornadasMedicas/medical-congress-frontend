import { ReduxJornadasAdmin } from "./IAdmin";
import { PropsGlobalModal } from "./IModal";
import { PropsActiveSection, ReduxJornadasSlides } from "./IReduxTrayectoria";

export interface ReduxGeneralSelector {
    admin: ReduxJornadasAdmin
    trayectoria: ReduxJornadasSlides
    section: PropsActiveSection,
    modal: PropsGlobalModal
}