<script>
import { mapActions } from "vuex";
import { Dna, Gtm } from "@/shared";
import { PriButton } from "@/shared-components";
import { SubmitButtonComponent, FooterComponent } from "@/components";

export default {
  name: "View",
  mixins: [Gtm],
  components: {
    PriButton,
    SubmitButtonComponent,
    FooterComponent
  },
  data: () => ({
    frm: undefined
  }),
  computed: {
    validForm() {
      let isValid = true;
      if (this.frm !== undefined) {
        this.frm.forEach(({ valid }) => {
          if (!valid) isValid = valid;
        });
      }
      return isValid;
    }
  },
  async created() {
    const deviceDna = await Dna.getDevice();
    this.setDeviceDna(deviceDna);
  },
  destroyed() {
    this.hideBanner();
  },
  mounted() {
    const frm = Object.keys(this.$refs)[0];
    if (frm) this.frm = this.$refs[frm].inputs;
  },
  methods: {
    ...mapActions("ui", ["showBanner", "showError", "hideBanner"]),
    ...mapActions(["setDeviceDna"])
  }
};
</script>
