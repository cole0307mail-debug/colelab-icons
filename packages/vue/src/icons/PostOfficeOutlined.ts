// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PostOfficeOutlinedSvg from '@colelab/icons-svg/es/asn/PostOfficeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PostOfficeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PostOfficeOutlinedSvg }, slots);
  },
});
