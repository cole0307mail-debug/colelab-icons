// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DelayWarningOutlinedSvg from '@colelab/icons-svg/es/asn/DelayWarningOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DelayWarningOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DelayWarningOutlinedSvg }, slots);
  },
});
