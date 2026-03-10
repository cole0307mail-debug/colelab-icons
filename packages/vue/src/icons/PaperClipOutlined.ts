// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PaperClipOutlinedSvg from '@colelab/icons-svg/es/asn/PaperClipOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PaperClipOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PaperClipOutlinedSvg }, slots);
  },
});
