// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ProfileOutlinedSvg from '@colelab/icons-svg/es/asn/ProfileOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ProfileOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ProfileOutlinedSvg }, slots);
  },
});
