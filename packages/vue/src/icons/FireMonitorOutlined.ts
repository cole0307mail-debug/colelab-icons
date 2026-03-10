// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireMonitorOutlinedSvg from '@colelab/icons-svg/es/asn/FireMonitorOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireMonitorOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireMonitorOutlinedSvg }, slots);
  },
});
