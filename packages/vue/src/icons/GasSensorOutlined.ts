// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GasSensorOutlinedSvg from '@colelab/icons-svg/es/asn/GasSensorOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GasSensorOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GasSensorOutlinedSvg }, slots);
  },
});
