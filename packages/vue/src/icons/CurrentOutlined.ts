// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CurrentOutlinedSvg from '@colelab/icons-svg/es/asn/CurrentOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CurrentOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CurrentOutlinedSvg }, slots);
  },
});
