// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HighlightOutlinedSvg from '@colelab/icons-svg/es/asn/HighlightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HighlightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HighlightOutlinedSvg }, slots);
  },
});
