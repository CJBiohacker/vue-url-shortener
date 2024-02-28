import brFlag from "@/assets/Brasil.svg?url";
import usFlag from "@/assets/EUA.svg?url";

export default {
  data() {
    return {
      languages: [
        {
          code: "pt",
          name: this.$t("LANGUAGE_BRAZILIAN_PT"),
        },
        {
          code: "en",
          name: this.$t("LANGUAGE_ENGLISH"),
        },
      ],
      currentFlag: "",
      currentLanguage: "",
    };
  },
  created() {
    const currentLang = this.languages.find((lang) => {
      return lang.code === this.$i18n.locale;
    });
    this.currentLanguage = currentLang.name;
    this.currentFlag =
      this.currentLanguage === this.$t("LANGUAGE_ENGLISH") ? usFlag : brFlag;
  },
  methods: {
    updateLanguage(lang) {
      this.currentLanguage = lang;
      this.$i18n.locale = lang === this.$t("LANGUAGE_ENGLISH") ? "en" : "pt";
      this.currentFlag = lang === this.$t("LANGUAGE_ENGLISH") ? usFlag : brFlag;
      this.$forceUpdate();
    },
  },
};
