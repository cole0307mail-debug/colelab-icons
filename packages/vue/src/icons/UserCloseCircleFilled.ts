// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserCloseCircleFilledSvg from '@colelab/icons-svg/es/asn/UserCloseCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserCloseCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserCloseCircleFilledSvg }, slots);
  },
});
