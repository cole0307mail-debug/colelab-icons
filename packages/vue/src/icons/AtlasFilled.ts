// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AtlasFilledSvg from '@colelab/icons-svg/es/asn/AtlasFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AtlasFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AtlasFilledSvg }, slots);
  },
});
