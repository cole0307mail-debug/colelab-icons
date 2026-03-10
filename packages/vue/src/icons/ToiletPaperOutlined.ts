// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ToiletPaperOutlinedSvg from '@colelab/icons-svg/es/asn/ToiletPaperOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ToiletPaperOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ToiletPaperOutlinedSvg }, slots);
  },
});
