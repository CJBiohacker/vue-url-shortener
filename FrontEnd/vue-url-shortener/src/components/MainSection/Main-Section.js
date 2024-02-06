import re_weburl from "@/helpers/helpers.js";
import urlService from "../../services/url.services";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    formTitle: {
      type: String,
      default: "",
    },
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
        (input) => (re_weburl.test(input) ? "" : "This is an invalid URL."),
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
        console.log("RULES IS FALSE");
        this.loading = false;
        return;
      }
      this.loading = !this.loading;
      try {
        console.log("🚀 ~ shortenURL ~ this.url:", this.url)
        const { shortUrl } = await urlService.shortenAndPostUrl({ url: this.url });
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
        this.snackBarMsg = "Url copied to the clipboard.";
        this.snackbarStatus = !this.snackbarStatus;
      } catch (error) {
        this.snackBarMsg = "An error occurred while copying";
        this.snackbarStatus = !this.snackbarStatus;
      }
    },
  },
};
