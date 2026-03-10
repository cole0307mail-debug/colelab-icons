// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NormallyOpenCancelOutlinedSvg from '@colelab/icons-svg/es/asn/NormallyOpenCancelOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NormallyOpenCancelOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NormallyOpenCancelOutlinedSvg }, slots);
  },
});
