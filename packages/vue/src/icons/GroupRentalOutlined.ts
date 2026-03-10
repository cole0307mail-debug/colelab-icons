// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GroupRentalOutlinedSvg from '@colelab/icons-svg/es/asn/GroupRentalOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GroupRentalOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GroupRentalOutlinedSvg }, slots);
  },
});
