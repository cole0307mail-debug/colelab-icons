// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CloseCircleFilledSvg from '@colelab/icons-svg/es/asn/CloseCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CloseCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CloseCircleFilledSvg }, slots);
  },
});
