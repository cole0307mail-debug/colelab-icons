// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DigitalMediaOutlinedSvg from '@colelab/icons-svg/es/asn/DigitalMediaOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DigitalMediaOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DigitalMediaOutlinedSvg }, slots);
  },
});
