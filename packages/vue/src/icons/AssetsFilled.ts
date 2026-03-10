// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AssetsFilledSvg from '@colelab/icons-svg/es/asn/AssetsFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AssetsFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AssetsFilledSvg }, slots);
  },
});
