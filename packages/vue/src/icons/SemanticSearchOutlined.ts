// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SemanticSearchOutlinedSvg from '@colelab/icons-svg/es/asn/SemanticSearchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SemanticSearchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SemanticSearchOutlinedSvg }, slots);
  },
});
