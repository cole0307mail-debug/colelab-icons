// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GasSensorControllerOutlinedSvg from '@colelab/icons-svg/es/asn/GasSensorControllerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GasSensorControllerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GasSensorControllerOutlinedSvg }, slots);
  },
});
