import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLinkedin, mdiGithub, mdiInstagram, mdiTwitter } from "@mdi/js";

export default {
  components: {
    SvgIcon,
  },
  props: {
    author: {
      type: String,
      default: "",
    },
    profiles: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    openProfileInNewTab(url) {
      window.open(url, "_blank", "noreferrer");
    },
    setSvgIconPath(profileType) {
      if (profileType === "linkedin") return mdiLinkedin;
      if (profileType === "github") return mdiGithub;
      if (profileType === "instagram") return mdiInstagram;
      if (profileType === "twitter") return mdiTwitter;
    },
  },
  mounted() {
    console.log(this.profiles);
  },
};
