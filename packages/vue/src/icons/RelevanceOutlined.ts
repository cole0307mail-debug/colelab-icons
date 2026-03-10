// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RelevanceOutlinedSvg from '@colelab/icons-svg/es/asn/RelevanceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RelevanceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RelevanceOutlinedSvg }, slots);
  },
});
