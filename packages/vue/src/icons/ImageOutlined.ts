// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ImageOutlinedSvg from '@colelab/icons-svg/es/asn/ImageOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ImageOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ImageOutlinedSvg }, slots);
  },
});
