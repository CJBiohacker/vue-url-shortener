import re_weburl from "@/helpers/helpers.js";
import urlService from "../../services/url.services";

export default {
  props: {
    cardMaxWidth: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      url: "",
      loading: false,
      rules: [
        (input) => (re_weburl.test(input) ? "" : this.$t("INVALID_URL_MSG")),
      ],
      showShortenedUrl: false,
      shortURL: "",
      snackBarMsg: "",
      snackbarStatus: false,
    };
  },
  methods: {
    async shortenURL() {
      if (!re_weburl.test(this.url)) {
        this.loading = false;
        this.showShortenedUrl = false;
        return;
      }
      this.loading = !this.loading;
      try {
        const { shortUrl } = await urlService.shortenAndPostUrl({
          url: this.url,
        });
        this.shortURL = shortUrl;
      } catch (error) {
        console.log("error =>", error);
      } finally {
        if (!this.showShortenedUrl)
          this.showShortenedUrl = !this.showShortenedUrl;
        this.loading = !this.loading;
      }
    },
    async copyURL() {
      try {
        await navigator.clipboard.writeText(this.shortURL);
        this.snackBarMsg = this.$t("URL_COPIED");
        this.snackbarStatus = !this.snackbarStatus;
      } catch (error) {
        this.snackBarMsg = this.$t("ERROR_COPYING_URL");
        this.snackbarStatus = !this.snackbarStatus;
      }
    },
  },
};
