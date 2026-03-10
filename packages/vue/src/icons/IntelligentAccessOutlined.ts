// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IntelligentAccessOutlinedSvg from '@colelab/icons-svg/es/asn/IntelligentAccessOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IntelligentAccessOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IntelligentAccessOutlinedSvg }, slots);
  },
});
