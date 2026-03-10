// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BeautySalonOutlinedSvg from '@colelab/icons-svg/es/asn/BeautySalonOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BeautySalonOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BeautySalonOutlinedSvg }, slots);
  },
});
