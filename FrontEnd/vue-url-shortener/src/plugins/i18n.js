import { createI18n } from "vue-i18n";
import language from "../languages/index";

const vueI18n = createI18n({
    locale: "pt",
    fallbackLocale: "pt",
    messages: {
        pt: language.pt,
        en: language.en
    }
});

export default vueI18n;