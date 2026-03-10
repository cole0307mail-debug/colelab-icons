// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmartLightPoleOutlinedSvg from '@colelab/icons-svg/es/asn/SmartLightPoleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmartLightPoleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmartLightPoleOutlinedSvg }, slots);
  },
});
