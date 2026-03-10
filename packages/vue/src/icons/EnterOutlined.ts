// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EnterOutlinedSvg from '@colelab/icons-svg/es/asn/EnterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EnterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EnterOutlinedSvg }, slots);
  },
});
