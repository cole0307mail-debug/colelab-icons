// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PowerUpsOutlinedSvg from '@colelab/icons-svg/es/asn/PowerUpsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PowerUpsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PowerUpsOutlinedSvg }, slots);
  },
});
