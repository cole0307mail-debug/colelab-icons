// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ZoomPlusOutlinedSvg from '@colelab/icons-svg/es/asn/ZoomPlusOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ZoomPlusOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ZoomPlusOutlinedSvg }, slots);
  },
});
