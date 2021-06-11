import {scrolling_top} from "./modules/scroll_top.mjs"
import {dropdown} from "./modules/dropdown_menu.mjs"
import {modal} from "./modules/modal.mjs"
import {formulaire} from "./modules/formulaire.mjs"
import {accordeon} from "./modules/accordeon.mjs"
import {popover} from "./modules/popover.mjs"
import {loader} from "./modules/loader.mjs"
import {animation_scroll} from "./modules/animation_scroll.mjs"


loader.Initialize();

scrolling_top.Initialize();
dropdown.Initialize();
modal.Initialize();
formulaire.Initialize();
accordeon.Initialize();
popover.Initialize();
animation_scroll.Initialize();

animation_scroll.Anim();

