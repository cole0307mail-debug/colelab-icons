// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ZoomInOutlinedSvg from '@colelab/icons-svg/es/asn/ZoomInOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ZoomInOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ZoomInOutlinedSvg }, slots);
  },
});
