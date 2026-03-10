// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmartWatchOutlinedSvg from '@colelab/icons-svg/es/asn/SmartWatchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmartWatchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmartWatchOutlinedSvg }, slots);
  },
});
