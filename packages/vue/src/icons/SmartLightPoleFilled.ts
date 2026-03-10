// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmartLightPoleFilledSvg from '@colelab/icons-svg/es/asn/SmartLightPoleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmartLightPoleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmartLightPoleFilledSvg }, slots);
  },
});
