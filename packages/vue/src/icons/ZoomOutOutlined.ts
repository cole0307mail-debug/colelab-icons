// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ZoomOutOutlinedSvg from '@colelab/icons-svg/es/asn/ZoomOutOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ZoomOutOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ZoomOutOutlinedSvg }, slots);
  },
});
