// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ChargeOutlinedSvg from '@colelab/icons-svg/es/asn/ChargeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ChargeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ChargeOutlinedSvg }, slots);
  },
});
