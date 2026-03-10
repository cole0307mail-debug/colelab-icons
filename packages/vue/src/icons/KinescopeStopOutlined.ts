// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import KinescopeStopOutlinedSvg from '@colelab/icons-svg/es/asn/KinescopeStopOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'KinescopeStopOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: KinescopeStopOutlinedSvg }, slots);
  },
});
