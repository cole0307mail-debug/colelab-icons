// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AssetsOutlinedSvg from '@colelab/icons-svg/es/asn/AssetsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AssetsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AssetsOutlinedSvg }, slots);
  },
});
