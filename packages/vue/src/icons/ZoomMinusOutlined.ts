// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ZoomMinusOutlinedSvg from '@colelab/icons-svg/es/asn/ZoomMinusOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ZoomMinusOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ZoomMinusOutlinedSvg }, slots);
  },
});
