// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RainstormOutlinedSvg from '@colelab/icons-svg/es/asn/RainstormOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RainstormOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RainstormOutlinedSvg }, slots);
  },
});
